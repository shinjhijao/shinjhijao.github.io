<?php
$host = "localhost";
$dbname = "SEL";
$user = "SEL";
$password = "123456";

$conn = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (!$conn) {
    die("Error de conexión: " . pg_last_error());
}else{
    echo'conexion exitosa';
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ident = $_POST["ident"];

    $pob_urbana = $_POST["pob_urbana"];
    $pob_rural = $_POST["pob_rural"];
    $pob_hombres = $_POST["pob_hombres"];
    $pob_mujeres = $_POST["pob_mujeres"];
    $superficie = $_POST["superficie"];
    $altitud = $_POST["altitud"];
    $n_distritos = $_POST["n_distritos"];
    $lagunas = $_POST["lagunas"];
    $clima = $_POST["clima"];
    $fundacion = $_POST["fundacion"];
    $centroide_x = $_POST["centroide_x"];
    $centroide_y = $_POST["centroide_y"];
    $zona = $_POST["zona"];
    $crecimiento_pob = $_POST["crecimiento_pob"];
    $centros_poblados = $_POST["centros_poblados"];
    $idh = $_POST["idh"];
    $t_area = $_POST["t_area"];
    $pertenencia = $_POST["pertenencia"];

    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO datos_generales.datos (id, pob_urbana, pob_rural, pob_hombres, pob_mujeres, superficie, altitud, n_distritos, lagunas, clima, fundacion, centroide_x, centroide_y, zona, crecimiento_pob, centros_poblados, idh, t_area, pertenencia) 
                VALUES (:ident, :pob_urbana, :pob_rural, :pob_hombres, :pob_mujeres, :superficie, :altitud, :n_distritos, :lagunas, :clima, :fundacion, :centroide_x, :centroide_y, :zona, :crecimiento_pob, :centros_poblados, :idh, :t_area, :pertenencia)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':pob_urbana'  => $pob_urbana, ':pob_rural'  => $pob_rural, ':pob_hombres'  => $pob_hombres, ':pob_mujeres'  => $pob_mujeres, ':superficie'  => $superficie, ':altitud'  => $altitud, ':n_distritos'  => $n_distritos, ':lagunas'  => $lagunas, ':clima'  => $clima, ':fundacion'  => $fundacion, ':centroide_x'  => $centroide_x, ':centroide_y'  => $centroide_y, ':zona'  => $zona, ':crecimiento_pob'  => $crecimiento_pob, ':centros_poblados'  => $centros_poblados, ':idh'  => $idh, ':t_area'  => $t_area, ':pertenencia'  => $pertenencia]);
        
        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>