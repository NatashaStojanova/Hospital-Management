package mk.ukim.finki.natashastojanova.hospital_management.web.controllers;

import mk.ukim.finki.natashastojanova.hospital_management.dto.AvgPatientsDoctor_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.dto.Hospital_Location_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.dto.ICD_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.*;
import mk.ukim.finki.natashastojanova.hospital_management.service.BaseHospitalService;
import mk.ukim.finki.natashastojanova.hospital_management.service.DoctorService;
import mk.ukim.finki.natashastojanova.hospital_management.service.ICDService;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@RestController
@CrossOrigin("*")
public class MainController {
    private final DoctorService doctorService;
    private final BaseHospitalService baseHospitalService;
    private final ICDService icdService;

    public MainController(DoctorService doctorService,
                          BaseHospitalService baseHospitalService,
                          ICDService icdService) {
        this.doctorService = doctorService;
        this.baseHospitalService = baseHospitalService;
        this.icdService = icdService;
    }

    //find Doctors by Hospital
    @GetMapping(value = "/base-hospitals/{baseHospitalId}/hospitals/{hospitalId}")
    public List<GeneralPractitioner> findAllDoctorsByHospital(@PathVariable Long baseHospitalId, @PathVariable Long hospitalId) {
        return doctorService.findAllGPsByHospital(hospitalId);
    }

    //find Doctors by Hospital
    @GetMapping(value = "/base-hospitals/{baseHospitalId}/hospitals/{hospitalId}/medical-specialists")
    public List<MedicalSpecialist> findAllDoctorsSpecialistsByHospital(@PathVariable Long baseHospitalId, @PathVariable Long hospitalId) {
        return doctorService.findAllDoctorsSpecialistsByHospital(hospitalId);
    }

    //find patients by doctor
    @GetMapping(value = "/base-hospitals/{baseHospitalId}/hospitals/{hospitalId}/doctors/{doctorId}")
    public List<Patient> filterPatientsByDoctor(@PathVariable Long baseHospitalId, @PathVariable Long hospitalId, @PathVariable Long doctorId) {
        return doctorService.findAllDoctorPatients(doctorId);
    }

    //return diagnosis history for a specific patient
    @GetMapping(value = "/base-hospitals/{baseHospitalId}/hospitals/{hospitalId}/doctors/{doctorId}/patient/{patientId}")
    public List<ICD> diagnosisHistory(@PathVariable Long baseHospitalId, @PathVariable Long hospitalId, @PathVariable Long doctorId, @PathVariable Long patientId) {
        return doctorService.diagnosisHistory(patientId);
    }

    //find all base hospitals
    @GetMapping(value = "/base-hospitals")
    List<BaseHospital> findAllBaseHospitals() {
        return baseHospitalService.findAllBaseHospitals();
    }

    //find all hospitals
    @RequestMapping(value = "/base-hospitals/{id}/hospitals", method = RequestMethod.GET)
    List<Hospital> findAllHospitals(@PathVariable Long id) {
        return baseHospitalService.findAllHospitals(id);
    }

    @RequestMapping(value = "/groupByCode", method = RequestMethod.GET)
    Collection<ICD_Dto> findAllCodes() {
        return doctorService.groupByCode();
    }

    @RequestMapping(value = "/get-icd-codes", method = RequestMethod.GET)
    List<ICD> getAllICDCodes() {
        return icdService.getAllICDCodes();
    }

    //@RequestMapping(value = "/get-departments", method = RequestMethod.GET)
    //List<Department> getAllDepartment(){ return departmentService.getAllDepartments();}

    @RequestMapping(value = "/groupByLocation", method = RequestMethod.GET)
    Collection<Hospital_Location_Dto> groupByHospitalLocation() {
        return baseHospitalService.groupByLocation();
    }

    //avg
    @RequestMapping(value = "/avgPatientsPerDoctor", method = RequestMethod.POST)
    Float avgPatientsPerDoctor(@RequestBody AvgPatientsDoctor_Dto avgPatientsDoctor_dto) {
        return doctorService.avgPatientsPerDoctor(avgPatientsDoctor_dto.getSsn(), avgPatientsDoctor_dto.getFromDate(), avgPatientsDoctor_dto.getToDate());
    }

}


