package com.example.progettobackend.Repository;

import com.example.progettobackend.Model.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OperationRepository extends JpaRepository<Operation, Integer> {
    List<Operation> findOperationById(@Param("id") int id);
}
