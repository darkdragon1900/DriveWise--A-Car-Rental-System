package com.drivewise.car.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drivewise.car.customexception.ImagesNotFoundException;
import com.drivewise.car.customexception.UserNotFoundException;
import com.drivewise.car.entity.Images;
import com.drivewise.car.service.ImagesService;

@RestController
@CrossOrigin("*")
@RequestMapping("/image")
public class ImageController {

	@Autowired
	private ImagesService imagesServiceRef;

	@PostMapping("/upload/{carId}")
	public ResponseEntity<?> uploadImage(@RequestParam("image") MultipartFile[] image, @PathVariable int carId)
			throws IOException {
		try {
			return new ResponseEntity<>(imagesServiceRef.saveImage(image, carId),HttpStatus.OK);
		} catch (UserNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to Upload", HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getByCar/{carId}")
	public ResponseEntity<?> getImagesByRoom(@PathVariable int carId) {
		try {
			List<Images> imagesData = imagesServiceRef.getImagesDataByuserId(carId);
			if (imagesData.isEmpty()) {
				return new ResponseEntity<>("No images found for room ID: " + carId, HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(imagesData, HttpStatus.OK);
		} catch (ImagesNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	

	@PostMapping("/uploadImageBooking/{bookingId}")
	public ResponseEntity<?> uploadImagePG(@RequestParam("licenseimg") MultipartFile[] image, @PathVariable int bookingId)
			throws IOException {
		try {
			return new ResponseEntity<>(imagesServiceRef.saveImageForBooking(image, bookingId),HttpStatus.OK);
		} catch (UserNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to Upload", HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/getByBooking/{bookingId}")
	public ResponseEntity<?> getImagesBypg(@PathVariable int bookingId) {
		try {
			List<Images> imagesData = imagesServiceRef.getImagesDataByBookingId(bookingId);
			if (imagesData.isEmpty()) {
				return new ResponseEntity<>("No images found for pg ID: " + bookingId, HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(imagesData, HttpStatus.OK);
		} catch (ImagesNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> delete(@PathVariable Integer id) {
		try {
			return imagesServiceRef.delete(id);
		} catch (ImagesNotFoundException e) {
			return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
		}
	}
}
