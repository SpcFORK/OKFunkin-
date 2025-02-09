{ pkgs }: {
	deps = [
   pkgs.gh
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.vscode-langservers-extracted
  ];
}