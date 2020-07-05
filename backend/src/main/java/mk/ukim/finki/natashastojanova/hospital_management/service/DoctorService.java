package mk.ukim.finki.natashastojanova.hospital_management.service;


import mk.ukim.finki.natashastojanova.hospital_management.dto.ICD_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.*;

import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
public interface DoctorService {

    public List<Doctor> findAllDoctors();

    public List<GeneralPractitioner> findAllGPsByHospital(Long id);

    public List<MedicalSpecialist> findAllDoctorsSpecialistsByHospital(Long id);

    public List<Patient> findAllDoctorPatients(Long id);

    public List<MedicalSpecialist> filterDoctorsByDepartment(String name);

    public List<ICD> diagnosisHistory(Long id);

    public Doctor addNewDoctor(Long ssn, String name, String surname, Long hospital_id);

    public Collection<ICD_Dto> groupByCode();

    public Integer addNewCheckUp(String description, Date date, Long patientSSN, Long doctorSSN);

    public Integer addNewCheckUpICD(int checkUpId, int icdId);

    Doctor findOne(Long id);

    Integer addNewPatient(int ssn, String name, String surname, String address, int age, int id_doctor);

    Float avgPatientsPerDoctor(int ssn, Date fromDate, Date toDate);
}
