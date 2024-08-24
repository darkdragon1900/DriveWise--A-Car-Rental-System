package com.drivewise.car.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.drivewise.car.entity.Images;

public interface ImagesRepo extends JpaRepository<Images, Integer> {
	List<Images>  findByCarRefCarId(int carId);
	
	List<Images> findByBookingRefBookingId(int bookingId);
}
