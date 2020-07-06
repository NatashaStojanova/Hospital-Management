--Функција која за даден лекар, го дава вкупниот број на пациенти кои ги прегледал за даден почетен и краен датум.
CREATE OR REPLACE FUNCTION MonthlyReport(INT, DATE, DATE)
RETURNS INTEGER AS $$
BEGIN
    RETURN (
        SELECT count(distinct cu.id)
        FROM doctor D JOIN check_up CU ON D.id = CU.doctor_id
        WHERE (CU.date >= $2 AND CU.date <= $3) AND d.id = $1
    );

END;
$$ LANGUAGE plpgsql;


SELECT MonthlyReport(194,'2019-01-02', '2019-01-02')

