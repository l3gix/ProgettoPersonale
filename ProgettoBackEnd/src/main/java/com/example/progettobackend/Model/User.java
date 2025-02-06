package com.example.progettobackend.Model;


import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
@Table(name="utenti")
public class User
{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;

    private String username;
    private String password;
    private String nome;
    private String cognome;
    private double credito;
}
