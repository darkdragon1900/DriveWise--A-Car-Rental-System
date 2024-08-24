package com.drivewise.car.service;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.drivewise.car.customexception.ImagesNotFoundException;
import com.drivewise.car.dao.ImagesRepo;
import com.drivewise.car.entity.Booking;
import com.drivewise.car.entity.Cars;
import com.drivewise.car.entity.Images;
import com.drivewise.car.entity.User;

@Service
public class ImagesService {
	@Autowired
	private ImagesRepo imagesRepoRef;
	
	@Autowired
	private CarService carServiceRef;
	
	@Autowired
	private BookingService bookingServiceRef;
	
	
	public List<Images> saveImage(MultipartFile[] imagefile, int carId) throws IOException {
		System.out.println(" service image");
		Set<Images> images = new HashSet<>();
		for (MultipartFile img : imagefile) {
			Images image = new Images();
			image.setImagedata(img.getBytes());
			Cars carRef = carServiceRef.fetchById(carId);
			image.setCarRef(carRef);
			images.add(image);			
		}
		List<Images> image1 = imagesRepoRef.saveAll(images);
		if (image1 != null) {
			return image1;
		} else {
			throw new ImagesNotFoundException("unable to save image try again latter");
		}

	}
	
	
	public List<Images> saveImageForBooking(MultipartFile[] imagefile, int bookingId) throws IOException {
		System.out.println(" service image");
		Set<Images> images = new HashSet<>();
		for (MultipartFile img : imagefile) {
			Images image = new Images();
			image.setImagedata(img.getBytes());
			Booking bookingRef = bookingServiceRef.fetchById(bookingId);
			image.setBookingRef(bookingRef);
			images.add(image);			
		}
		List<Images> image1 = imagesRepoRef.saveAll(images);
		if (image1 != null) {
			return image1;
		} else {
			throw new ImagesNotFoundException("unable to save image try again later");
		}
		}



	public List<Images> getImagesDataByuserId(int carId) {
		List<Images> images = imagesRepoRef.findByCarRefCarId(carId);
		if (images.isEmpty()) {
			throw new ImagesNotFoundException("No images found for room ID: " + carId);
		}
		return images;
	}
	
	
	public List<Images> getImagesDataByBookingId(int bookingId) {
		List<Images> images = imagesRepoRef.findByBookingRefBookingId(bookingId);
		if (images.isEmpty()) {
			throw new ImagesNotFoundException("No images found for pg ID: " + bookingId);
		}
		return images;
	}

	public ResponseEntity<?> delete(Integer id) {

		Optional<Images> img = imagesRepoRef.findById(id);
		if (img.isPresent()) {
			imagesRepoRef.deleteById(id);
			return new ResponseEntity<>("image deleted successful", HttpStatus.OK);
		} else {
			throw new ImagesNotFoundException("image Not found");
		}
	}

	
}

