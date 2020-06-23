package mk.ukim.finki.natashastojanova.hospital_management.web.controllers;

import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import mk.ukim.finki.natashastojanova.hospital_management.service.DoctorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@RestController
@RequestMapping("/doctors")
public class DoctorController {
    private final DoctorService doctorService;

    public DoctorController(DoctorService doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping
    public List<Doctor> findAllDoctors() {
        return doctorService.findAllDoctors();
    }

    @GetMapping(value = "/byHospital")
    public List<Doctor> findAllDoctorsByHospital() {
        String name = "SISTINA";
        return doctorService.findAllDoctorsByHospital(name);
    }

    @GetMapping(value = "/patient")
    public List<Patient> findAllDoctor() {
        Long id = Long.parseLong("199");
        return doctorService.findAllDoctorPatients(id);
    }
}
