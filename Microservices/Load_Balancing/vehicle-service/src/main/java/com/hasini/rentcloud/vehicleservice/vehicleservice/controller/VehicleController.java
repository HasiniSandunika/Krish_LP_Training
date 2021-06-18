package com.hasini.rentcloud.vehicleservice.vehicleservice.controller;

import com.hasini.rentcloud.commons.model.vehicle.Vehicle;
import com.hasini.rentcloud.vehicleservice.vehicleservice.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/services/vehicles")
public class VehicleController {

    @Autowired
    VehicleService vehicleService;

    @PostMapping(value = "")
    public Vehicle save(@RequestBody Vehicle vehicle){
        return vehicleService.save(vehicle);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Vehicle getById(@PathVariable int id) {
        Vehicle vehicle =  vehicleService.getById(id);
        return vehicle;
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<Vehicle> findAll() {
        List<Vehicle> vehicles=vehicleService.findAll();
        return vehicles;
    }

}
