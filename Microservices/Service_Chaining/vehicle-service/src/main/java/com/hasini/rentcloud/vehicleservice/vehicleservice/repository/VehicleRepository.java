package com.hasini.rentcloud.vehicleservice.vehicleservice.repository;

import com.hasini.rentcloud.commons.model.vehicle.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {
}
