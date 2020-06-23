package mk.ukim.finki.natashastojanova.hospital_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "medical_specialist")
public class MedicalSpecialist extends Doctor {

    @JsonIgnore
    @ManyToOne
    private Department department;

    @JsonIgnore
    @OneToMany(mappedBy = "medicalSpecialist")
    private List<Referral> referralList;

}
