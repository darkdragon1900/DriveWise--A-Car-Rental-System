package com.drivewise.car.entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="car")
public class Cars {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int carId;
	private String carBrand;
	private String features;
	private double pricePerDay;
	private String model;
	private String registrationNumber;
	private String carType;
	
	@ManyToOne
	@JoinColumn(name ="userid")
	private User User;
	
	 @OneToMany(mappedBy = "cars",cascade = CascadeType.ALL)
	 @JsonIgnore
	private List<Booking> bookingList = new ArrayList<Booking>();
	 
	public Cars() {
		// TODO Auto-generated constructor stub
	}

	public int getCarId() {
		return carId;
	}

	public void setCarId(int carId) {
		this.carId = carId;
	}

	public String getCarBrand() {
		return carBrand;
	}

	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}

	public String getFeatures() {
		return features;
	}

	public void setFeatures(String features) {
		this.features = features;
	}

	public double getPricePerDay() {
		return pricePerDay;
	}

	public void setPricePerDay(double pricePerDay) {
		this.pricePerDay = pricePerDay;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getRegistrationNumber() {
		return registrationNumber;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public String getCarType() {
		return carType;
	}

	public void setCarType(String carType) {
		this.carType = carType;
	}

	public User getUser() {
		return User;
	}

	public void setUser(User user) {
		User = user;
	}

	public List<Booking> getBookingList() {
		return bookingList;
	}

	public void setBookingList(List<Booking> bookingList) {
		this.bookingList = bookingList;
	}

	@Override
	public String toString() {
		return "Cars [carId=" + carId + ", carBrand=" + carBrand + ", features=" + features + ", pricePerDay="
				+ pricePerDay + ", model=" + model + ", registrationNumber=" + registrationNumber + ", carType="
				+ carType + ", User=" + User + ", bookingList=" + bookingList + "]";
	}

		
	
	
}
