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

    $sup_forestal = $_POST["sup_forestal"];
    $tipo = $_POST["tipo"];
    $porc_bosque = $_POST["porc_bosque"];
    $especies = $_POST["especies"];
    $declaratoria = $_POST["declaratoria"];
    $bosques = $_POST["bosques"];

    $manejo = $_POST["manejo"];
    $productos = $_POST["productos"];
    $aprovechamiento = $_POST["aprovechamiento"];
    $extraccion = $_POST["extraccion"];
    $explotacion = $_POST["explotacion"];
    $reforestacion = $_POST["reforestacion"];

    $area_protegida = $_POST["area_protegida"];
    $amenazas = $_POST["amenazas"];
    $proteccion = $_POST["proteccion"];
    $reglamento = $_POST["reglamento"];
    $incendios = $_POST["incendios"];
    $plan_municipal = $_POST["plan_municipal"];

    $educacion = $_POST["educacion"];
    $fortalecimiento = $_POST["fortalecimiento"];
    $actores = $_POST["actores"];
    $contfor = $_POST["contfor"];
    $incentivos = $_POST["incentivos"];


    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO recursos_naturales.cobertura_forestal (id, sup_forestal, tipo, porc_bosque, especies, declaratoria, bosques) 
                VALUES (:ident, :sup_forestal, :tipo, :porc_bosque, :especies, :declaratoria, :bosques)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':sup_forestal' => $sup_forestal, ':tipo' => $tipo, ':porc_bosque' => $porc_bosque, ':especies' => $especies, ':declaratoria' => $declaratoria, ':bosques' => $bosques]);
        
        // Inserción en la tabla"
        $sql2 = "INSERT INTO recursos_naturales.uso_aprovechamiento (id, manejo, productos, aprovechamiento, extraccion, explotacion, reforestacion) 
                VALUES (:ident, :manejo, :productos, :aprovechamiento, :extraccion, :explotacion, :reforestacion)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':manejo' => $manejo, ':productos' =>  $productos, ':aprovechamiento' => $aprovechamiento, ':extraccion' =>  $extraccion, ':explotacion' => $explotacion, ':reforestacion' => $reforestacion]);

        // Inserción en la tabla"
        $sql3 = "INSERT INTO recursos_naturales.gestion_ambiental (id, area_protegida, amenazas, proteccion, reglamento, incendios, plan_municipal) 
                VALUES (:ident, :area_protegida, :amenazas, :proteccion, :reglamento, :incendios, :plan_municipal)";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->execute([':ident' => $ident, ':area_protegida' => $area_protegida, ':amenazas' => $amenazas, ':proteccion' => $proteccion, ':reglamento' => $reglamento, ':incendios' => $incendios, ':plan_municipal' => $plan_municipal]);

        // Inserción en la tabla"
        $sql4 = "INSERT INTO recursos_naturales.control_participacion (id, educacion, fortalecimiento, actores, contfor, incentivos) 
                VALUES (:ident, :educacion, :fortalecimiento, :actores, :contfor, :incentivos)";
        $stmt4 = $conn->prepare($sql4);
        $stmt4->execute([':ident' => $ident, ':educacion' => $educacion, ':fortalecimiento' => $fortalecimiento, ':actores' => $actores, ':contfor' => $contfor, ':incentivos' => $incentivos]);


        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>