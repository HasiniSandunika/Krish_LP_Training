package com.hasini.cloud.oauth.prod.oauthprod;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;

@SpringBootApplication
@EnableAuthorizationServer
public class OauthProdApplication {

	public static void main(String[] args) {
		SpringApplication.run(OauthProdApplication.class, args);
	}

}
