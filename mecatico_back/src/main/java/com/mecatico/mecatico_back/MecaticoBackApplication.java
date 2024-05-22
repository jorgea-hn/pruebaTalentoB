package com.mecatico.mecatico_back;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.mecatico.mecatico_back.repository")
@EntityScan("com.mecatico.mecatico_back.model")
public class MecaticoBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(MecaticoBackApplication.class, args);
	}

}
