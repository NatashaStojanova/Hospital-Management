package mk.ukim.finki.natashastojanova.hospital_management.repository;

import mk.ukim.finki.natashastojanova.hospital_management.dto.ICD_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Repository
public interface DoctorRepository extends JpaSpecificationRepository<Doctor> {
    @Query("SELECT d FROM Doctor d")
    List<Doctor> findAllDoctors();

    @Query("SELECT gp FROM GeneralPractitioner gp JOIN Hospital h ON gp.hospital.id = h.id JOIN BaseHospital bh ON h.baseHospital.id = bh.id WHERE h.id = :id")
    List<GeneralPractitioner> findAllGPsByHospital(Long id);

    @Query("SELECT ms FROM MedicalSpecialist ms JOIN Hospital h ON ms.hospital.id = h.id JOIN BaseHospital bh ON h.baseHospital.id = bh.id WHERE h.id = :id")
    List<MedicalSpecialist> findAllDoctorsSpecialistsByHospital(Long id);

    @Query("SELECT p FROM GeneralPractitioner gp JOIN Patient  p ON gp.id = p.gp.id WHERE gp.id = :id")
    List<Patient> findAllDoctorPatients(@Param("id") Long id);

    @Query("SELECT ms FROM MedicalSpecialist ms JOIN Department d ON ms.department.id = d.id WHERE d.name = :departmentName")
    List<MedicalSpecialist> filterDoctorsByDepartment(@Param("departmentName") String departmentName);

    @Query("SELECT icd FROM Patient p JOIN CheckUp cu ON p.id = cu.patient.id JOIN CheckUp_ICD cu_icd ON cu.id = cu_icd.checkUp.id JOIN ICD icd ON cu_icd.icd.id = icd.id WHERE p.id= :id")
    List<ICD> diagnosisHistory(@Param("id") Long id);

    @Query(value = "INSERT INTO Doctor (id,ssn,name,surname,hospital_id) VALUES ((SELECT nextval('main_sequence') AS id),:ssn,:name,:surname,:hospital_id) RETURNING *", nativeQuery = true)
    Doctor addNewDoctor(@Param("ssn") Long ssn, @Param("name") String name, @Param("surname") String surname, @Param("hospital_id") Long hospital_id);

    @Query(value = "SELECT i.code AS code, count(i.code) AS total FROM ICD i JOIN CheckUp_ICD cu ON i.id = cu.icd.id JOIN CheckUp c ON c.id = cu.checkUp.id WHERE c.date >= '2019-01-01' AND c.date <= '2019-12-31' GROUP BY i.code")
    Collection<ICD_Dto> groupByCode();

    @Query(value = "SELECT checkupfunction(:doctorSSN, :patientSSN, :description)", nativeQuery = true)
    Integer addNewCheckUp(@Param("description") String description, @Param("patientSSN") Long patientSSN, @Param("doctorSSN") Long doctorSSN);

    @Query(value = "INSERT INTO check_up_icd(id,icd_id,check_up_id) VALUES ((SELECT nextval('main_sequence') AS id), :icdId, :checkUpId) RETURNING *", nativeQuery = true)
    Integer addNewCheckUpICD(@Param("checkUpId") int checkUpId, @Param("icdId") int icdId);

    @Query(value = "INSERT INTO patient(id,ssn,name,surname,address,age,id_doctor) VALUES ((SELECT nextval('main_sequence') AS id), :ssn, :name, :surname, :address, :age, :id_doctor) RETURNING *", nativeQuery = true)
    Integer addNewPatient(@Param("ssn") int ssn, @Param("name") String name, @Param("surname") String surname, @Param("address") String address, @Param("age") int age, @Param("id_doctor") int id_doctor);

    @Query(value = "SELECT monthlyreport((SELECT DISTINCT id FROM doctor WHERE ssn = :ssn), :fromDate, :toDate)", nativeQuery = true)
    Float monthlyReport(@Param("ssn") int ssn, @Param("fromDate") Date fromDate, @Param("toDate") Date toDate);
}
