<!DOCTYPE html>
<html lang="es">

<?php include "includes/head.php" ?>

<body>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Where does it sells</th>
                <th>Website Link</th>
                <th>Price (€)</th>
                <th>Options</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $query = "SELECT * FROM wishlist";

            $result = mysqli_query($conn, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                echo "<tr>
                        <td>" . $row['name'] . "</td>
                        <td class='description'>" . $row['description'] . "</td>
                        <td>" . $row['wheresells'] . "</td>
                        <td>
                            <a class='description' href=". $row['linkweb'] .">". $row['linkweb'] ."</a> 
                        </td>
                        <td>" . $row['price'] . " €</td>
                        <td>
                            <a class='edit' href='addupdatewishlist.php?id=" . $row['id'] . "'>EDIT</a>
                            <a class='delete' href='scripts/deleterow.php?id=" . $row['id'] . "'>DELETE</a>
                        </td>
                    </tr>";
            }
            ?>
        </tbody>
    </table>
    <form action="addupdatewishlist.php">
    <button type="submit">ADD NEW GIFT</button>
</form>
</body>

</html>