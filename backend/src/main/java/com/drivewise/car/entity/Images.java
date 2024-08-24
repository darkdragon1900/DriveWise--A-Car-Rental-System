package com.drivewise.car.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Images {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Lob
	@Column(columnDefinition = "LONGBLOB")
	private byte[] imagedata;

	@ManyToOne
	@JoinColumn(name = "carId")
	private Cars carRef;

	@ManyToOne
	@JoinColumn(name = "bookingId")
	private Booking bookingRef;

	
	public Images() {

	}


	public Images(Integer id, byte[] imagedata, Cars carRef, Booking bookingRef) {
		super();
		this.id = id;
		this.imagedata = imagedata;
		this.carRef = carRef;
		this.bookingRef = bookingRef;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public byte[] getImagedata() {
		return imagedata;
	}


	public void setImagedata(byte[] imagedata) {
		this.imagedata = imagedata;
	}


	public Cars getCarRef() {
		return carRef;
	}


	public void setCarRef(Cars carRef) {
		this.carRef = carRef;
	}


	public Booking getBookingRef() {
		return bookingRef;
	}


	public void setBookingRef(Booking bookingRef) {
		this.bookingRef = bookingRef;
	}


	@Override
	public String toString() {
		return "Images [id=" + id + ", imagedata=" + Arrays.toString(imagedata) + ", carRef=" + carRef + ", bookingRef="
				+ bookingRef + "]";
	}


	



}
