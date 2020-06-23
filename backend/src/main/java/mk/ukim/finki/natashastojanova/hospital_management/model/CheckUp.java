package mk.ukim.finki.natashastojanova.hospital_management.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

/**
 * @author Natasha Stojanova
 */
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "check_up")
public class CheckUp {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String description;

    private Date date;

    @ManyToOne
    private Patient patient;

    @ManyToOne
    private Doctor doctor;

    @OneToMany(mappedBy = "checkUp")
    private List<CheckUp_ICD> checkUp_icdList;

    @OneToMany(mappedBy = "givenReferral")
    private List<Referral> referralList;

    @ManyToOne
    @JoinColumn(name = "referral_id")
    private Referral realizedReferral;
}
