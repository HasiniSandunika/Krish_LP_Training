package com.hasini.rentcloud.vehicleservice.vehicleservice.service;

import com.hasini.rentcloud.commons.model.Vehicle;

import java.util.List;

public interface VehicleService {
    Vehicle save(Vehicle customer);
    Vehicle getById(int id);
    List<Vehicle> findAll();
}
