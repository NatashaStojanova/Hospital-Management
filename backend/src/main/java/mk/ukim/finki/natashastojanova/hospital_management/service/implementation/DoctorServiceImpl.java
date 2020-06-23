package mk.ukim.finki.natashastojanova.hospital_management.service.implementation;

import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import mk.ukim.finki.natashastojanova.hospital_management.repository.DoctorRepository;
import mk.ukim.finki.natashastojanova.hospital_management.repository.GeneralPractitionerRepository;
import mk.ukim.finki.natashastojanova.hospital_management.service.DoctorService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Service
public class DoctorServiceImpl implements DoctorService {

    private DoctorRepository doctorRepository;

    private GeneralPractitionerRepository gpRepository;

    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    protected DoctorRepository getDoctorRepository() {
        return doctorRepository;
    }

    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAllDoctors();
    }

    public List<Doctor> findAllDoctorsByHospital(String name) {
        return doctorRepository.findAllDoctorsByHospital(name);
    }

    public List<Patient> findAllDoctorPatients(Long id) {
        return doctorRepository.findAllDoctorPatients(id);
    }
}
