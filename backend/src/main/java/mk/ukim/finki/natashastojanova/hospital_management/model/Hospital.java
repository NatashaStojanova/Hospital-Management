package mk.ukim.finki.natashastojanova.hospital_management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "hospital")
public class Hospital {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_base_hospital")
    @JsonIgnore
    private BaseHospital baseHospital;

    @OneToMany(mappedBy = "hospital")
    @JsonIgnore
    private List<Doctor> doctorList;

    @OneToMany(mappedBy = "hospital")
    @JsonIgnore
    private List<Department> departmentList;

    private String location;
}
