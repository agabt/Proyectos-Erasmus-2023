<!DOCTYPE html>
<html lang="es">

<?php
include "includes/head.php";
echo "<link rel='stylesheet' href='css/styleform.css'>";
?>

<body>

    <?php
    $gift = null;
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $query = "SELECT * FROM wishlist WHERE id = '$id' ";
        $result = mysqli_query($conn, $query) or die(mysqli_error($conn));
        $gift = mysqli_fetch_assoc($result);
    }

    $action = "scripts/addrow.php";
    if ($gift != null) {
        $action = "scripts/updaterow.php";
    }
    ?>

    <h1>
        <?php
        if ($gift == null) {
            echo "ADD GIFT TO THE WISHLIST";
        } else {
            echo "EDIT GIFT FROM THE WISHLIST";
        }
        ?>
    </h1>

    <form action="<?= $action ?>" method="POST">

        <fieldset>
            <label for="title">Name</label>
            <input value="<?= $gift['name'] ?>" id="name" type="text" name="name" maxlength="255" placeholder="Enter the name here..." required />
        </fieldset>

        <fieldset>
            <label for="artist">Description</label>
            <input value="<?= $gift['description'] ?>" id="description" type="text" name="description" maxlength="255" placeholder="Enter the description here..." required />
        </fieldset>

        <fieldset>
            <label for="artist">Where can you buy it?</label>
            <input value="<?= $gift['wheresells'] ?>" id="wheresells" type="text" name="wheresells" maxlength="255" placeholder="Enter the where can you buy it here..." required />
        </fieldset>

        <fieldset>
            <label for="artist">Webpage</label>
            <input value="<?= $gift['linkweb'] ?>" id="linkweb" type="text" name="linkweb" maxlength="255" placeholder="Enter the webpage here..." required />
        </fieldset>

        <fieldset>
            <label for="artist">Price (€)</label>
            <input value="<?= $gift['price'] ?>" id="price" type="number" name="price" maxlength="4" placeholder="Enter the price here..." required />
        </fieldset>

        <div>
            <button type="submit">
                <?php
                if ($gift == null) {
                    echo "ADD GIFT";
                } else {
                    echo "EDIT GIFT";
                }
                ?>
            </button>
        </div>

        <?php
        if ($gift) {
            echo "<input type='hidden' value='" . $gift['id'] . "' name='id'>";
        }
        ?>

    </form>

</body>

</html>