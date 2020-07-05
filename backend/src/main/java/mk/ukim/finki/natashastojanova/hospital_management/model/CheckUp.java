package mk.ukim.finki.natashastojanova.hospital_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore
    private Patient patient;

    @ManyToOne
    @JsonIgnore
    private Doctor doctor;

    @OneToMany(mappedBy = "checkUp")
    @JsonIgnore
    private List<CheckUp_ICD> checkUp_icdList;

    @OneToMany(mappedBy = "givenReferral")
    @JsonIgnore
    private List<Referral> referralList;

    @ManyToOne
    @JoinColumn(name = "referral_id")
    @JsonIgnore
    private Referral realizedReferral;
}
