import axios from '../axios/axios'

/**
 *  @author Natasha Stojanova (natashastojanova6@gmail.com)
 */

const CrudService = {
    /**
     * Fetch BaseHospitals
     * @returns List<BaseHospital> baseHospitals
     */
    fetchBaseHospitals: () => {
        return axios.get("/base-hospitals");
    },

    /**
     * Fetch hospitals which are part of BaseHospital with ID
     * @param baseHospitalId
     * @returns List<Hospital> hospitalList
     */
    fetchHospitals: (baseHospitalId) => {
        return axios.get("/base-hospitals/" + baseHospitalId + "/hospitals");
    },

    /**
     * Fetch Doctors from hospital
     * @param baseHospitalId
     * @param hospitalId
     * @returns List<Doctor> doctorList
     */
    fetchDoctors: (baseHospitalId, hospitalId) => {
        return axios.get("/base-hospitals/" + baseHospitalId + "/hospitals/" + hospitalId);
    },


    /**
     * Fetch patients from doctor
     * @param baseHospitalId
     * @param hospitalId
     * @param doctorId
     * @returns List<Patient> patientList
     */
    fetchPatients: (baseHospitalId, hospitalId, doctorId) => {
        return axios.get("/base-hospitals/" + baseHospitalId + "/hospitals/" + hospitalId + "/doctors/" + doctorId);
    },

    /**
     * Fetch diagnoses for patient
     * @param baseHospitalId
     * @param hospitalId
     * @param doctorId
     * @param patientId
     * @returns List<ICD> codes
     */
    fetchDiagnoses: (baseHospitalId, hospitalId, doctorId, patientId) => {
        return axios.get("/base-hospitals/" + baseHospitalId + "/hospitals/" + hospitalId + "/doctors/" + doctorId + "/patient/" + patientId);
    },

    /**
     * Add new Base Hospital
     * @param baseHospital object
     * @returns List<ICD> codes
     */
    saveBaseHospital: (baseHospital) => {
        return axios.post("/add-new-base-hospital", baseHospital);
    },

    /**
     * Add new Hospital
     * @param baseHospitalId
     * @param hospital object
     */

    saveHospital: (hospital, baseHospitalId) => {
        return axios.post("/base-hospitals/" + baseHospitalId + "/add", hospital);
    },

    createCheckUp: (checkUp) => {
        return axios.post("/create-new-check-up", checkUp);
    },

    createCheckUpICD: (checkUpICD) => {
        return axios.post("/create-new-check-up-icd", checkUpICD);
    },

    groupByCodes: () => {
        return axios.get("/groupByCode");
    },

    groupByLocation: () => {
        return axios.get("/groupByLocation");
    },
};

export default CrudService;