<?php
$web_root_dir = $_SERVER['DOCUMENT_ROOT'];
$repo_dir = $web_root_dir.'.git';

$logsFile = 'deploy.log';
$git_bin_path = 'git';

$branch = 'master';

$content = file_get_contents("php://input");

$json = json_decode($content);

//file_put_contents('deploy.log', print_r($json, true), FILE_APPEND);
if(isset($json->push) && isset($json->push->changes)) {
    foreach($json->push->changes as $change) {
        if(isset($change->new) && $change->new->name == $branch) {

            // cd folder_project && git fetch
            exec('cd ' . $web_root_dir . ' && ' . $git_bin_path  . ' fetch');

            exec('cd ' . $web_root_dir . ' && ' . $git_bin_path  . ' pull origin master 2>&1',$output, $exit);

            //exec('cd ' . $web_root_dir . ' && ' . 'php artisan migrate',$output, $exit);
            //exec('cd ' . $web_root_dir . ' && ' . 'vendor/bin/phpunit',$output, $exit);

            //$commit_hash = shell_exec('cd ' . $repo_dir . ' && ' . $git_bin_path  . ' rev-parse --short HEAD');

            //file_put_contents($logsFile, date('m/d/Y h:i:s a') . " Deployed branch: " .  $branch . " Commit: " . $commit_hash . "\n", FILE_APPEND);
            file_put_contents($logsFile, print_r($output, true), FILE_APPEND);
        }
    }
}

?>