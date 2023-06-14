<?php
include "includes/head.php"
?>

<table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of birth</th>
                <th>Age</th>
                <th>Age in months</th>
                <th>Age in days</th>
                <th>Options</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $query = "SELECT * FROM birthday";

            $result = mysqli_query($conn, $query);

            while ($row = mysqli_fetch_assoc($result)) {
                $today = new DateTime(date('y.m.d'));
                $birthday = new DateTime($row['bday']);
                $diff = $today->diff($birthday);
                echo "<tr>
                        <td>" . $row['fname'] . "</td>
                        <td>" . $row['lname'] . "</td>
                        <td>" . $row['bday'] . "</td>
                        <td>" . $diff->y . "</td>
                        <td>" . $diff->m + ($diff->y * 12) . "</td>
                        <td>" . $diff->d + ($diff->m * 30) + ($diff->y * 365) . "</td>
                        <td>
                            <a class='edit' href='addupdateperson.php?id=" . $row['id'] . "'>EDIT</a>
                            <a class='delete' href='scripts/deleteperson.php?id=" . $row['id'] . "'>DELETE</a>
                        </td>
                    </tr>";
            }
            ?>
        </tbody>
    </table>
    <form action="addupdateperson.php">
    <button type="submit">ADD NEW PERSON</button>
</form>