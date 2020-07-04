package mk.ukim.finki.natashastojanova.hospital_management.service.implementation;

import mk.ukim.finki.natashastojanova.hospital_management.model.ICD;
import mk.ukim.finki.natashastojanova.hospital_management.repository.ICDRepository;
import mk.ukim.finki.natashastojanova.hospital_management.service.ICDService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Service
public class ICDServiceImpl implements ICDService {

    private ICDRepository icdRepository;

    public ICDServiceImpl(ICDRepository icdRepository) {
        this.icdRepository = icdRepository;
    }

    protected ICDRepository getIcdRepository() {
        return icdRepository;
    }

    @Override
    public ICD findByCode(Long code) {
        return getIcdRepository().findByCode(code);
    }

    public List<ICD> getAllICDCodes() {
        return icdRepository.getAllICDCodes();
    }
}
