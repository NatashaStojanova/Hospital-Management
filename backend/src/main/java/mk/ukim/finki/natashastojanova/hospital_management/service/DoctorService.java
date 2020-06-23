package mk.ukim.finki.natashastojanova.hospital_management.service;


import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
public interface DoctorService {

    public List<Doctor> findAllDoctors();

    public List<Doctor> findAllDoctorsByHospital(String name);

    public List<Patient> findAllDoctorPatients(Long id);

}
