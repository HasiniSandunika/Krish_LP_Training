package com.hasini.rentcloud.rentservice.controller;

import com.hasini.rentcloud.commons.model.rent.Rent;
import com.hasini.rentcloud.rentservice.model.Response;
import com.hasini.rentcloud.rentservice.model.SimpleResponse;
import com.hasini.rentcloud.rentservice.service.RentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping(value = "/services/rents")
public class RentController {
    @Autowired
    RentService rentService;

    @PostMapping
    public Rent save(@RequestBody Rent rent) {
        return rentService.save(rent);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Response findById(@PathVariable int id, @RequestParam(required = false) String type ) throws ExecutionException, InterruptedException {
        if(type==null){
            return new SimpleResponse(rentService.findById(id));
        }
        else{
            return rentService.findDetailResponse(id);
        }
    }

    @GetMapping
    public List<Rent> getAllRents() {
        return rentService.findAll();
    }

}
