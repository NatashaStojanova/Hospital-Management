package mk.ukim.finki.natashastojanova.hospital_management.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "referral")
public class Referral {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    String description;

    @ManyToOne
    private MedicalSpecialist medicalSpecialist;

    @ManyToOne
    @JoinColumn(name = "check_up_id")
    private CheckUp givenReferral;

    @OneToMany(mappedBy = "realizedReferral")
    private List<CheckUp> checkUpList;
}
