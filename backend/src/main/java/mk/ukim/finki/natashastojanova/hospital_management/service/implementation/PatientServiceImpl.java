package mk.ukim.finki.natashastojanova.hospital_management.service.implementation;

import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import mk.ukim.finki.natashastojanova.hospital_management.repository.PatientRepository;
import mk.ukim.finki.natashastojanova.hospital_management.service.PatientService;
import org.springframework.stereotype.Service;

/**
 * @author Natasha Stojanova
 */
@Service
public class PatientServiceImpl implements PatientService {
    private final PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Override
    public Patient save(Patient patient) {
        return patientRepository.save(patient);
    }
}
