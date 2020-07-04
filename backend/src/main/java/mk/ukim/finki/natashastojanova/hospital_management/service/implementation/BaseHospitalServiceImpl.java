package mk.ukim.finki.natashastojanova.hospital_management.service.implementation;

import mk.ukim.finki.natashastojanova.hospital_management.dto.Hospital_Location_Dto;
import mk.ukim.finki.natashastojanova.hospital_management.model.BaseHospital;
import mk.ukim.finki.natashastojanova.hospital_management.model.Hospital;
import mk.ukim.finki.natashastojanova.hospital_management.repository.BaseHospitalRepository;
import mk.ukim.finki.natashastojanova.hospital_management.service.BaseHospitalService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Service
public class BaseHospitalServiceImpl implements BaseHospitalService {

    private BaseHospitalRepository baseHospitalRepository;

    public BaseHospitalServiceImpl(BaseHospitalRepository baseHospitalRepository) {
        this.baseHospitalRepository = baseHospitalRepository;
    }

    protected BaseHospitalRepository getBaseHospitalRepository() {
        return baseHospitalRepository;
    }

    public List<BaseHospital> findAllBaseHospitals() {
        return baseHospitalRepository.findAllBaseHospitals();
    }

    public List<Hospital> findAllHospitals(Long id) {
        return baseHospitalRepository.findAllHospitals(id);
    }

    public BaseHospital addNewBaseHospital(String name, String description) {
        return baseHospitalRepository.addNewBaseHospital(name, description);
    }

    public Integer addNewHospital(String location, Long id) {
        return baseHospitalRepository.addNewHospital(location, id);
    }

    public Collection<Hospital_Location_Dto> groupByLocation() {
        return baseHospitalRepository.groupByLocation();
    }
}
