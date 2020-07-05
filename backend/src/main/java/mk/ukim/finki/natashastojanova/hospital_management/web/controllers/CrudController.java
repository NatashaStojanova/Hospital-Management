package mk.ukim.finki.natashastojanova.hospital_management.web.controllers;

import mk.ukim.finki.natashastojanova.hospital_management.dto.*;
import mk.ukim.finki.natashastojanova.hospital_management.model.BaseHospital;
import mk.ukim.finki.natashastojanova.hospital_management.model.Doctor;
import mk.ukim.finki.natashastojanova.hospital_management.service.BaseHospitalService;
import mk.ukim.finki.natashastojanova.hospital_management.service.DoctorService;
import mk.ukim.finki.natashastojanova.hospital_management.service.ICDService;
import mk.ukim.finki.natashastojanova.hospital_management.service.PatientService;
import org.springframework.web.bind.annotation.*;

/**
 * @author Natasha Stojanova
 */
@RestController
@CrossOrigin("*")
public class CrudController {

    private final DoctorService doctorService;
    private final ICDService icdService;
    private final PatientService patientService;
    private final BaseHospitalService baseHospitalService;

    public CrudController(DoctorService doctorService, ICDService icdService, PatientService patientService, BaseHospitalService baseHospitalService) {
        this.icdService = icdService;
        this.patientService = patientService;
        this.baseHospitalService = baseHospitalService;
        this.doctorService = doctorService;
    }

    @GetMapping
    public Doctor addNewDoctor() {
        return doctorService.addNewDoctor(Long.parseLong("89928991"), "Lulu", "Lulovska", Long.parseLong("11"));
    }

    @PostMapping("/add-new-base-hospital")
    public BaseHospital addNewBaseHospital(@RequestBody BaseHospitalDto baseHospitalDto) {
        String name = baseHospitalDto.getName();
        return baseHospitalService.addNewBaseHospital(baseHospitalDto.getName(), baseHospitalDto.getDescription());
    }

    @RequestMapping(value = "/base-hospitals/{id}/add", method = RequestMethod.POST)
    public Integer addNewHospital(@RequestBody HospitalDto hospitalDto, @PathVariable Long id) {
        return baseHospitalService.addNewHospital(hospitalDto.getLocation(), id);
    }

    //create new check up
    @RequestMapping(value = "/create-new-check-up", method = RequestMethod.POST)
    public Integer createNewCheckUp(@RequestBody CheckUpDto checkUpDto) {
        return doctorService.addNewCheckUp(checkUpDto.getDescription(), checkUpDto.getPatientSSN(), checkUpDto.getDoctorSSN());
    }

    //create new check up icd
    @RequestMapping(value = "/create-new-check-up-icd", method = RequestMethod.POST)
    public Integer createNewCheckUpIcd(@RequestBody CheckUpICD_Dto checkUpICD_dto) {
        return doctorService.addNewCheckUpICD(checkUpICD_dto.getIdCheckUp(), checkUpICD_dto.getIdCode());
    }

    @RequestMapping(value = "/new-patient", method = RequestMethod.POST)
    public Integer addPatient(@RequestBody Patient_Dto patientDto) {
        return doctorService.addNewPatient(patientDto.getSsn(), patientDto.getName(), patientDto.getSurname(), patientDto.getAddress(), patientDto.getAge(), patientDto.getId_doctor());
    }
}
