--За секој пациент прикажи во која болница оди на преглед
--под претпоставка дека оди во онаа болница каде работи неговит матичен лекар

CREATE VIEW PatientsPerHospitalView AS
SELECT p.ssn, bh.name
FROM nbp_2020_p17.public.general_practitioner gp join patient p on gp.id = p.id_doctor
    join hospital h on gp.hospital_id = h.id join base_hospital bh on h.id_base_hospital = bh.id
GROUP BY p.ssn, bh.name;
