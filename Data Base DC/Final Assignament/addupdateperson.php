<!DOCTYPE html>
<html lang="es">

<?php
include "includes/head.php";
echo "<link rel='stylesheet' href='css/styleform.css'>";
?>

<body>

    <?php
    $birthday = null;
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = "SELECT * FROM birthday WHERE id = '$id' ";
        $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
        $birthday = mysqli_fetch_assoc($result);
    }

    $action = "scripts/addperson.php";
    if ($birthday != null) {
        $action = "scripts/updateperson.php";
    }
    ?>

    <h1>
        <?php
        if ($birthday == null) {
            echo "ADD BIRTHDAY TO THE DATABASE";
        } else {
            echo "EDIT BIRTHDAY FROM THE DATABASE";
        }
        ?>
    </h1>

    <form action="<?= $action ?>" method="POST">

        <fieldset>
            <label for="fname">First Name</label>
            <input value="<?= $birthday['fname'] ?>" id="fname" type="text" name="fname" maxlength="255" placeholder="Enter the first name here..." required />
        </fieldset>

        <fieldset>
            <label for="lname">Last Name</label>
            <input value="<?= $birthday['lname'] ?>" id="lname" type="text" name="lname" maxlength="255" placeholder="Enter the last name here..." required />
        </fieldset>

        <fieldset>
            <label for="date">Date of birth</label>
            <input value="<?= $birthday['bday'] ?>" id="bday" type="date" name="bday" placeholder="Enter the date here..." required />
        </fieldset>

        <div>
            <button type="submit">
                <?php
                if ($birthday == null) {
                    echo "ADD BIRTHDAY";
                } else {
                    echo "EDIT BIRTHDAY";
                }
                ?>
            </button>
        </div>

        <?php
        if ($birthday) {
            echo "<input type='hidden' value='" . $birthday['id'] . "' name='id'>";
        }
        ?>

    </form>

</body>

</html>