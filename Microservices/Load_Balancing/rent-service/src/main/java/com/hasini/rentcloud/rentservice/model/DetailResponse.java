package com.hasini.rentcloud.rentservice.model;

import com.hasini.rentcloud.commons.model.customer.Customer;
import com.hasini.rentcloud.commons.model.rent.Rent;
import com.hasini.rentcloud.commons.model.vehicle.Vehicle;

public class DetailResponse implements Response{
    private Rent rent;
    private Customer customer;
    private Vehicle vehicle;

    public DetailResponse(Rent rent, Customer customer, Vehicle vehicle) {
        this.rent = rent;
        this.customer = customer;
        this.vehicle = vehicle;
    }

    public Rent getRent() {
        return rent;
    }

    public void setRent(Rent rent) {
        this.rent = rent;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}
