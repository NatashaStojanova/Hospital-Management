package mk.ukim.finki.natashastojanova.hospital_management.service.implementation;

import mk.ukim.finki.natashastojanova.hospital_management.dto.ICD_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.ICD;
import mk.ukim.finki.natashastojanova.hospital_management.model.MedicalSpecialist;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;
import mk.ukim.finki.natashastojanova.hospital_management.repository.DoctorRepository;
import mk.ukim.finki.natashastojanova.hospital_management.repository.GeneralPractitionerRepository;
import mk.ukim.finki.natashastojanova.hospital_management.service.DoctorService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Date;
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

    public List<Doctor> findAllDoctorsByHospital(Long id) {
        return doctorRepository.findAllDoctorsByHospital(id);
    }

    public List<Patient> findAllDoctorPatients(Long id) {
        return doctorRepository.findAllDoctorPatients(id);
    }

    public List<MedicalSpecialist> filterDoctorsByDepartment(String name) {
        return doctorRepository.filterDoctorsByDepartment(name);
    }

    public List<ICD> diagnosisHistory(Long id) {
        return doctorRepository.diagnosisHistory(id);
    }

    public Doctor addNewDoctor(Long ssn, String name, String surname, Long hospital_id) {
        return doctorRepository.addNewDoctor(ssn, name, surname, hospital_id);
    }

    public Collection<ICD_Dto> groupByCode() {
        return doctorRepository.groupByCode();
    }

    public Integer addNewCheckUp(String description, Date date, Long patientSSN, Long doctorSSN) {
        return doctorRepository.addNewCheckUp(description, date, patientSSN, doctorSSN);
    }

    public Integer addNewCheckUpICD(int checkUpId, int icdId) {
        return doctorRepository.addNewCheckUpICD(checkUpId, icdId);
    }
}
