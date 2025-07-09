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

    $alcalde = $_POST["alcalde"];
    $concejales = $_POST["concejales"];
    $presidente_con = $_POST["presidente_con"];
    $eq_genero = $_POST["eq_genero"];
    $participacion = $_POST["participacion"];

    $sigla = $_POST["sigla"];
    $partidos_cm = $_POST["partidos_cm"];
    $escanos = $_POST["escanos"];
    $t_politico = $_POST["t_politico"];

    $ciu_votar = $_POST["ciu_votar"];
    $porcentaje = $_POST["porcentaje"];
    $resultados = $_POST["resultados"];
    $votos_nulos = $_POST["votos_nulos"];

    $categoria_mun = $_POST["categoria_mun"];
    $creacion_mun = $_POST["creacion_mun"];
    $n_distritos = $_POST["n_distritos"];
    $carta_org = $_POST["carta_org"];
    $esta_autono = $_POST["esta_autono"];

    $n_secretarias = $_POST["n_secretarias"];
    $presupuesto = $_POST["presupuesto"];
    $unidades = $_POST["unidades"];

    $comite_vigi = $_POST["comite_vigi"];
    $pres_participativo = $_POST["pres_participativo"];
    $audiencias = $_POST["audiencias"];
    $cont_social = $_POST["cont_social"];


    try {
        // Iniciar la transacción
        $conn->beginTransaction();

        // Inserción en la tabla"
        $sql1 = "INSERT INTO composiciongob.autoridades_muni (id, alcalde, concejales, presidente_con, eq_genero, participacion) 
                VALUES (:ident, :alcalde, :concejales, :presidente_con, :eq_genero, :participacion)";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->execute([':ident' => $ident, ':alcalde' => $alcalde, ':concejales' => $concejales, ':presidente_con' => $presidente_con, ':eq_genero' => $eq_genero, ':participacion' => $participacion]);
        

        // Inserción en la tabla usando el mismo ID
        $sql2 = "INSERT INTO composiciongob.representacion_politica (id, sigla, partidos_cm, escanos, t_politico) 
                VALUES (:ident, :sigla, :partidos_cm, :escanos, :t_politico)";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->execute([':ident' => $ident, ':sigla' => $sigla, ':partidos_cm' => $partidos_cm, ':escanos' => $escanos, ':t_politico' => $t_politico]);


        // Inserción en la tabla"
        $sql3 = "INSERT INTO composiciongob.padron_electoral (id, ciu_votar, porcentaje, resultados, votos_nulos) 
                VALUES (:ident, :ciu_votar, :porcentaje, :resultados, :votos_nulos)";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->execute([':ident' => $ident, ':ciu_votar' => $ciu_votar, ':porcentaje' => $porcentaje, ':resultados' => $resultados, ':votos_nulos' => $votos_nulos]);


        // Inserción en la tabla"
        $sql4 = "INSERT INTO composiciongob.categoria_municipio (id, categoria_mun, creacion_mun, n_distritos, carta_org, esta_autono) 
                VALUES (:ident, :categoria_mun, :creacion_mun, :n_distritos, :carta_org, :esta_autono)";
        $stmt4 = $conn->prepare($sql4);
        $stmt4->execute([':ident' => $ident, ':categoria_mun' => $categoria_mun, ':creacion_mun' => $creacion_mun, ':n_distritos' => $n_distritos, ':carta_org' => $carta_org, ':esta_autono' => $esta_autono]);


        // Inserción en la tabla"
        $sql5 = "INSERT INTO composiciongob.gestion_orginterna (id, n_secretarias, presupuesto, unidades) 
                VALUES (:ident, :n_secretarias, :presupuesto, :unidades)";
        $stmt5 = $conn->prepare($sql5);
        $stmt5->execute([':ident' => $ident, ':n_secretarias' => $n_secretarias, ':presupuesto' => $presupuesto, ':unidades' => $unidades]);


        // Inserción en la tabla"
        $sql6 = "INSERT INTO composiciongob.partici_ciudadana (id, comite_vigi, pres_participativo, audiencias, cont_social) 
                VALUES (:ident, :comite_vigi, :pres_participativo, :audiencias, :cont_social)";
        $stmt6 = $conn->prepare($sql6);
        $stmt6->execute([':ident' => $ident, ':comite_vigi' => $comite_vigi, ':pres_participativo' => $pres_participativo, ':audiencias' => $audiencias, ':cont_social' => $cont_social]);

        // Confirmar la transacción
        $conn->commit();
        echo "Datos insertados correctamente.";
    } catch (Exception $e) {
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }
}
?>