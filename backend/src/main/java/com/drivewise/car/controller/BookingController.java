package com.drivewise.car.controller;

import java.io.IOException;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.drivewise.car.customexception.BookingNotFoundException;
import com.drivewise.car.customexception.CarNotFoundException;
import com.drivewise.car.dto.ErrorResponse;
import com.drivewise.car.entity.Booking;
import com.drivewise.car.entity.Cars;
import com.drivewise.car.service.BookingService;

@CrossOrigin("*")
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;


	@PostMapping("/add")
	public ResponseEntity<?> registerCars(@RequestBody Booking booking) {
		Booking createdbooking = bookingService.create(booking);
		return new ResponseEntity<>(createdbooking, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public ResponseEntity<?> getAllCars() {
		try {
			return new ResponseEntity<>(bookingService.fetchAll(), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>
			(new ErrorResponse("Car Fetching is failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}

	}
	@GetMapping("/getcar/{carId}")
	public ResponseEntity<?> getUserById(@PathVariable("carId") Integer id) {
		try {
			return  ResponseEntity.ok(bookingService.fetchById(id));
			
		} catch (Exception e) {
			
			ErrorResponse errorResponce=
		    new ErrorResponse("Car Fetching is failed", e.getMessage());
			return new ResponseEntity<>
			(errorResponce,HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/update/{carId}")
	public ResponseEntity<?> updatecarById(@PathVariable("bookingId") Integer id,
			@RequestBody Booking updateCar) {
		try {
			Booking existingCar=bookingService.fetchById(id);
			
			return  ResponseEntity.ok(bookingService.update(updateCar, existingCar));
			
		} catch (Exception e) {
			
			ErrorResponse errorResponce= new ErrorResponse("Car updation is failed", e.getMessage());
			return new ResponseEntity<>(errorResponce,HttpStatus.BAD_REQUEST);
		}
	}
	@DeleteMapping("/delete/{carId}")
	public ResponseEntity<?>deleteCarById(@PathVariable ("bookingId") Integer id)
	{ try {
		Booking existingCar=bookingService.fetchById(id);
		return ResponseEntity.ok(bookingService.delete(existingCar));
				
	} catch (Exception e) {

		ErrorResponse errorResponce= new ErrorResponse("Booking deletion is failead", e.getMessage());
		return new ResponseEntity<>(errorResponce,HttpStatus.BAD_REQUEST);
		
	}
		
	}
//	@GetMapping("/getbyName/{name}")
//	public ResponseEntity<?> getCarByName(@PathVariable String brandName){
//		try {
//			ResponseEntity res = null;
//			Booking foundUser = bookingService.fetchCarByBrandName(brandName);
//			if(foundUser != null) {
//				return res.ok(foundUser);
//			
//			}else {
//				throw new CarNotFoundException("Invalid brandname..");
//			}
//		
//		} catch (Exception e) {
//			return new ResponseEntity<>(new ErrorResponse("fetching cars by brandname failed.", e.getMessage()),HttpStatus.BAD_REQUEST);
//		}
//		
		
	}

