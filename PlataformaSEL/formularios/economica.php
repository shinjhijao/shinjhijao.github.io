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
    $presupuesto = $_POST["presupuesto"];
    $publica = $_POST["inv_publica"];
    $gasto = $_POST["gasto_corr"];
    $ejecucion = $_POST["ejecucion"];
    $tgn = $_POST["tgn"];
    $propios = $_POST["ing_propios"];

    $economica = $_POST["act_economica"];
    $productivo = $_POST["productivo"];
    $estrategia = $_POST["estrategia"];
    $acproductiva = $_POST["act_productiva"];
    $rubros = $_POST["rubros"];

    $cultivos = $_POST["cultivos"];
    $produccion = $_POST["produccion"];
    $productores = $_POST["productores"];
    $agro = $_POST["agro"];
    $riego = $_POST["riego"];
    $coop_productores = $_POST["coop_productores"];
    $mercados = $_POST["mercados"];

    $minactiva = $_POST["minactiva"];
    $minerales = $_POST["minerales"];
    $cooperativas = $_POST["cooperativas"];
    $impacto = $_POST["impacto"];
    $informal = $_POST["informal"];
    $medio_ambi = $_POST["medio_ambi"];

    $n_financieras = $_POST["n_financieras"];
    $acc_credito = $_POST["acc_credito"];
    $pro_financiero = $_POST["pro_financiero"];
    $serv_moviles = $_POST["serv_moviles"];
    $cajero_aut = $_POST["cajero_aut"];

    $n_empresas = $_POST["n_empresas"];
    $rubros = $_POST["rubros"];
    $micro_emp = $_POST["micro_emp"];
    $exportadora = $_POST["exportadora"];
    $manufactura = $_POST["manufactura"];
    

    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO actividad_economica.presupuesto_municipal (id, presupuesto, inv_publica, gasto_corr, ejecucion, tgn, ing_propios) 
                VALUES (:ident, :presupuesto, :inv_publica, :gasto_corr, :ejecucion, :tgn, :ing_propios)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':presupuesto' => $presupuesto, ':inv_publica' => $publica, ':gasto_corr' => $gasto, ':ejecucion' => $ejecucion, ':tgn' => $tgn, ':ing_propios' => $propios,]);
        
        // // Inserción en la tabla usando el mismo ID
        $sql2 = "INSERT INTO actividad_economica.acteconomica_general (id, act_economica, productivo, estrategia, act_productiva, rubros) 
                VALUES (:ident, :act_economica, :productivo, :estrategia, :act_productiva, :rubros)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':act_economica' => $economica, ':productivo' => $productivo, ':estrategia' => $estrategia, ':act_productiva' => $acproductiva, ':rubros' => $rubros]);

        $sql3 = "INSERT INTO actividad_economica.producc_agro (id, cultivos, niv_produccion, productores, sup_agro, riego, coop_productores, mercados) 
                VALUES (:ident, :cultivos, :produccion, :productores, :agro, :riego, :coop_productores, :mercados)";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->execute([':ident' => $ident, ':cultivos' =>  $cultivos, ':produccion' => $produccion, ':productores' => $productores, ':agro' => $agro, ':riego' => $riego, ':coop_productores' => $coop_productores, ':mercados' => $mercados]);

        $sql4 = "INSERT INTO actividad_economica.mineria (id, min_activa, minerales, cooperativas, impacto, explotacion, medio_ambi)

            VALUES (:ident, :minactiva, :minerales, :cooperativas, :impacto, :informal, :medio_ambi)";
        $stmt4 = $conn->prepare($sql4);
        $stmt4->execute([':ident' => $ident, ':minactiva' => $minactiva, ':minerales' => $minerales, ':cooperativas' => $cooperativas, ':impacto' => $impacto, ':informal' => $informal, ':medio_ambi' => $medio_ambi]);

        $sql5 = "INSERT INTO actividad_economica.act_financiera (id, n_financieras, acc_credito, pro_financiero, serv_moviles, cajero_aut)

            VALUES (:ident, :n_financieras, :acc_credito, :pro_financiero, :serv_moviles, :cajero_aut)";
        $stmt5 = $conn->prepare($sql5);
        $stmt5->execute([':ident' => $ident, ':n_financieras' => $n_financieras, ':acc_credito' => $acc_credito, ':pro_financiero' => $pro_financiero, ':serv_moviles' => $serv_moviles, ':cajero_aut' => $cajero_aut]);


        $sql6 = "INSERT INTO actividad_economica.empresas (id, n_empresas, rubros, micro_emp, exportadora, manufactura)

            VALUES (:ident, :n_empresas, :rubros, :micro_emp, :exportadora, :manufactura)";
        $stmt6 = $conn->prepare($sql6);
        $stmt6->execute([':ident' => $ident, ':n_empresas' => $n_empresas, ':rubros' => $rubros, ':micro_emp' => $micro_emp, ':exportadora' => $exportadora, ':manufactura' => $manufactura]);

        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>