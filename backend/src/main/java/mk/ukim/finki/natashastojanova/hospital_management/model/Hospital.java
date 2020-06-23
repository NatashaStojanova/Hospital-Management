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
    private BaseHospital baseHospital;

    @OneToMany(mappedBy = "hospital")
    private List<Doctor> doctorList;

    @OneToMany(mappedBy = "hospital")
    private List<Department> departmentList;

    private String location;
}
