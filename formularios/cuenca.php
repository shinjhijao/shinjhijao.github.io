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
    $disponibilidad = $_POST["disponibilidad"];
    $demanda = $_POST["demanda"];
    $defi_superavit = $_POST["defi_superavit"];
    $fuente = $_POST["fuente"];
    $uso = $_POST["uso"];
    $estaciones = $_POST["estaciones"];
    $escasez = $_POST["escasez"];

    $acceso = $_POST["acceso"];
    $conexion = $_POST["conexion"];
    $saneamiento = $_POST["saneamiento"];
    $operador = $_POST["operador"];
    $tratamiento = $_POST["tratamiento"];
    $carencia = $_POST["carencia"];
    $expancion = $_POST["expancion"];

    $fuente_distrito = $_POST["fuente_distrito"];
    $cob_distrito = $_POST["cob_distrito"];
    $almacenamiento = $_POST["almacenamiento"];
    $problematica = $_POST["problematica"];
    $tratamiento = $_POST["tratamiento"];
    $acceso_edsal = $_POST["acceso_edsal"];

    $n_riego = $_POST["n_riego"];
    $superficie = $_POST["superficie"];
    $tipo = $_POST["tipo"];
    $beneficiarios = $_POST["beneficiarios"];
    $dependencia = $_POST["dependencia"];
    $prod_agro = $_POST["prod_agro"];
    $mejoras = $_POST["mejoras"];
    $eficiente = $_POST["eficiente"];

    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO plan_cuencas.balance_hidrico (id, disponibilidad, demanda, defi_superavit, fuente, uso, estaciones, escasez) 
                VALUES (:ident, :disponibilidad, :demanda, :defi_superavit, :fuente, :uso, :estaciones, :escasez)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':disponibilidad' => $disponibilidad, ':demanda' =>  $demanda, ':defi_superavit' => $defi_superavit, ':fuente' => $fuente, ':uso' => $uso, ':estaciones' => $estaciones, ':escasez' => $escasez]);
        
        // Inserción en la tabla usando el mismo ID
        $sql2 = "INSERT INTO plan_cuencas.agua_saneamiento (id, acceso, conexion, saneamiento, operador, tratamiento, carencia, expancion) 
                VALUES (:ident, :acceso, :conexion, :saneamiento, :operador, :tratamiento, :carencia, :expancion)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':acceso' => $acceso, ':conexion' => $conexion, ':saneamiento' => $saneamiento, ':operador' => $operador, ':tratamiento' => $tratamiento, ':carencia' => $carencia, ':expancion' => $expancion]);

        // Inserción en la tabla usando el mismo ID
        $sql3 = "INSERT INTO plan_cuencas.cobertura_agua (id, fuente_distrito, cob_distrito, almacenamiento, problematica, tratamiento, acceso_edsal) 
                VALUES (:ident, :fuente_distrito, :cob_distrito, :almacenamiento, :problematica, :tratamiento, :acceso_edsal)";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->execute([':ident' => $ident, ':fuente_distrito' => $fuente_distrito, ':cob_distrito' => $cob_distrito, ':almacenamiento' => $almacenamiento, ':problematica' => $problematica, ':tratamiento' => $tratamiento, ':acceso_edsal' => $acceso_edsal]);

        // Inserción en la tabla usando el mismo ID
        $sql4 = "INSERT INTO plan_cuencas.sistema_riego (id, n_riego, superficie, tipo, beneficiarios, dependencia, prod_agro, mejoras, eficiente) 
                VALUES (:ident, :n_riego, :superficie, :tipo, :beneficiarios, :dependencia, :prod_agro, :mejoras, :eficiente)";
        $stmt4 = $conn->prepare($sql4);
        $stmt4->execute([':ident' => $ident, ':n_riego' => $n_riego, ':superficie' => $superficie, ':tipo' => $tipo, ':beneficiarios' => $beneficiarios, ':dependencia' => $dependencia, ':prod_agro' => $prod_agro, ':mejoras' => $mejoras, ':eficiente' => $eficiente]);


        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>