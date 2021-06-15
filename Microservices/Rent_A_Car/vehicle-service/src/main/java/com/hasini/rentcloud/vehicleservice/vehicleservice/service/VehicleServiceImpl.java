package com.hasini.rentcloud.vehicleservice.vehicleservice.service;

import com.hasini.rentcloud.commons.model.Vehicle;
import com.hasini.rentcloud.vehicleservice.vehicleservice.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleServiceImpl implements VehicleService{

    @Autowired
    VehicleRepository vehicleRepository;

    @Override
    public Vehicle save(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle getById(int id) {
        Optional<Vehicle> vehicle =  vehicleRepository.findById(id);
        Vehicle vehicle1 = vehicle.get();
        return vehicle1;
    }

    @Override
    public List<Vehicle> findAll() {
        return vehicleRepository.findAll();
    }
}
