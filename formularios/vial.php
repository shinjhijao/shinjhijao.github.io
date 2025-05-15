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

    $kilometros = $_POST["kilometros"];
    $material = $_POST["material"];
    $intermunicipal = $_POST["intermunicipal"];
    $conectividad = $_POST["conectividad"];
    $estado_actual = $_POST["estado_actual"];
    $mejora_vial = $_POST["mejora_vial"];
    $instituciones = $_POST["instituciones"];
    $trans_publico = $_POST["trans_publico"];

    $telefonia = $_POST["telefonia"];
    $radiobase = $_POST["radiobase"];
    $cobertura = $_POST["cobertura"];
    $tecnologia = $_POST["tecnologia"];
    $conectividad = $_POST["conectividad"];
    $alcance = $_POST["alcance"];
    $proyectos = $_POST["proyectos"];

    $internet = $_POST["internet"];
    $pob_internet = $_POST["pob_internet"];
    $internet_rural = $_POST["internet_rural"];
    $velocidad = $_POST["velocidad"];
    $acceso_gratuito = $_POST["acceso_gratuito"];
    $centros_publicos = $_POST["centros_publicos"];
    $wifi_municipal = $_POST["wifi_municipal"];

    $nodos = $_POST["nodos"];
    $equi_alcaldia = $_POST["equi_alcaldia"];
    $estaciones = $_POST["estaciones"];
    $sig = $_POST["sig"];
    $alfabetizacion = $_POST["alfabetizacion"];

    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO vinculacion_vial.caminos (id, kilometros, material, intermunicipal, conectividad, estado_actual, mejora_vial, instituciones, trans_publico) 
                VALUES (:ident, :kilometros, :material, :intermunicipal, :conectividad, :estado_actual, :mejora_vial, :instituciones, :trans_publico)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':kilometros' => $kilometros, ':material' => $material, ':intermunicipal' => $intermunicipal, ':conectividad' => $conectividad, ':estado_actual' => $estado_actual, ':mejora_vial' => $mejora_vial, ':instituciones' => $instituciones, ':trans_publico' => $trans_publico]);
        
        // Inserción en la tabla"
        $sql2 = "INSERT INTO vinculacion_vial.cobertura_telefonica (id, telefonia, radiobase, cobertura, tecnologia, conectividad, alcance, proyectos) 
                VALUES (:ident, :telefonia, :radiobase, :cobertura, :tecnologia, :conectividad, :alcance, :proyectos)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':telefonia' => $telefonia, ':radiobase' => $radiobase, ':cobertura' => $cobertura, ':tecnologia' => $tecnologia, ':conectividad' => $conectividad, ':alcance' => $alcance, ':proyectos' => $proyectos]);

        // Inserción en la tabla"
        $sql3 = "INSERT INTO vinculacion_vial.internet (id, internet, pob_internet, internet_rural, velocidad, acceso_gratuito, centros_publicos, wifi_municipal) 
                VALUES (:ident, :internet, :pob_internet, :internet_rural, :velocidad, :acceso_gratuito, :centros_publicos, :wifi_municipal)";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->execute([':ident' => $ident, ':internet' => $internet, ':pob_internet' => $pob_internet, ':internet_rural' => $internet_rural, ':velocidad' => $velocidad, ':acceso_gratuito' => $acceso_gratuito, ':centros_publicos' => $centros_publicos, ':wifi_municipal' => $wifi_municipal]);


        // Inserción en la tabla"
        $sql4 = "INSERT INTO vinculacion_vial.infraestructura (id, nodos, equi_alcaldia, estaciones, sig, alfabetizacion) 
                VALUES (:ident, :nodos, :equi_alcaldia, :estaciones, :sig, :alfabetizacion)";
        $stmt4 = $conn->prepare($sql4);
        $stmt4->execute([':ident' => $ident, ':nodos' => $nodos, ':equi_alcaldia' => $equi_alcaldia, ':estaciones' => $estaciones, ':sig' => $sig, ':alfabetizacion' => $alfabetizacion]);

        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>