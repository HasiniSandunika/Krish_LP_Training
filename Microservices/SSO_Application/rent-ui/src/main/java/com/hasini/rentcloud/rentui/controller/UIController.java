package com.hasini.rentcloud.rentui.controller;

import com.hasini.rentcloud.commons.model.Customer;
import com.hasini.rentcloud.commons.model.Vehicle;
import com.hasini.rentcloud.rentui.config.AccessToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

@Controller
@EnableOAuth2Sso
public class UIController extends WebSecurityConfigurerAdapter {

    @Autowired
    RestTemplate restTemplate;

    @RequestMapping(value = "/")
    public String loadUI(){
        return "home";
    }

    @RequestMapping(value = "/secure")
    public String loadUISecure(){
        return "secure";
    }

    @RequestMapping(value = "/customers")
    public String loadCustomers(Model model){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", AccessToken.getAccessToken());
        HttpEntity<Customer> customerHttpEntity=new HttpEntity<>(httpHeaders);
        try{
            ResponseEntity<Customer[]> responseEntity= restTemplate.exchange("http://localhost:8181/services/customers",
                    HttpMethod.GET, customerHttpEntity, Customer[].class);
            model.addAttribute("customers", responseEntity.getBody());
        }catch (HttpStatusCodeException httpStatusCodeException){
            ResponseEntity responseEntity=ResponseEntity.status(httpStatusCodeException.getStatusCode())
                    .headers(httpStatusCodeException.getResponseHeaders())
                    .body(httpStatusCodeException.getResponseBodyAsString());
            model.addAttribute("error", responseEntity);
        }
        return "secure";
    }

    @RequestMapping(value = "/vehicles")
    public String loadVehicles(Model model){
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", AccessToken.getAccessToken());
        HttpEntity<Vehicle> customerHttpEntity=new HttpEntity<>(httpHeaders);
        try{
            ResponseEntity<Vehicle[]> responseEntity= restTemplate.exchange("http://localhost:8383/services/vehicles",
                    HttpMethod.GET, customerHttpEntity, Vehicle[].class);
            model.addAttribute("vehicles", responseEntity.getBody());
        }catch (HttpStatusCodeException httpStatusCodeException){
            ResponseEntity responseEntity=ResponseEntity.status(httpStatusCodeException.getStatusCode())
                    .headers(httpStatusCodeException.getResponseHeaders())
                    .body(httpStatusCodeException.getResponseBodyAsString());
            model.addAttribute("error_vehicle", responseEntity);
        }
        return "secure";
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/").permitAll().anyRequest().authenticated();
    }

}
