package mk.ukim.finki.natashastojanova.hospital_management.service;


import mk.ukim.finki.natashastojanova.hospital_management.dto.ICD_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.model.ICD;
import mk.ukim.finki.natashastojanova.hospital_management.model.MedicalSpecialist;
import mk.ukim.finki.natashastojanova.hospital_management.model.Patient;

import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
public interface DoctorService {

    public List<Doctor> findAllDoctors();

    public List<Doctor> findAllDoctorsByHospital(Long id);

    public List<Patient> findAllDoctorPatients(Long id);

    public List<MedicalSpecialist> filterDoctorsByDepartment(String name);

    public List<ICD> diagnosisHistory(Long id);

    public Doctor addNewDoctor(Long ssn, String name, String surname, Long hospital_id);

    public Collection<ICD_Dto> groupByCode();

    public Integer addNewCheckUp(String description, Date date, Long patientSSN, Long doctorSSN);

    public Integer addNewCheckUpICD(int checkUpId, int icdId);
}
