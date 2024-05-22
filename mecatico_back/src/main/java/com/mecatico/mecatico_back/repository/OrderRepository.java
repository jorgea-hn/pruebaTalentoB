package com.mecatico.mecatico_back.repository;


import com.mecatico.mecatico_back.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<Order,Long> {
}
