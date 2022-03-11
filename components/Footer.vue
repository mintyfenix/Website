<template>
  <footer>
		<!-- navigation bar -->
		<nav class="custom-navbar navbar navbar-expand-sm navbar-dark mb-2" id="bottomNavbar">

			<div>
				<ul class="navbar-nav">

					<li class="nav-item">
						<a class="nav-link" href="{{ site.baseurl }}/license">
							<i class="fas"></i>
							License
						</a>
					</li>

					<li class="nav-item unsized">
						<a class="nav-link" href="{{ site.baseurl }}/comments-policy">
							<i class="fas"></i>
							Comments Policy
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="{{ site.baseurl }}/stats">
							<i class="fas"></i>
							Statistics
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="https://docs.compliancepack.net/" rel="noopener">
							<i style="margin-left: 5px" class="fas"></i>
							Docs
						</a>
					</li>

					<li class="nav-item">
						<a class="nav-link" href="{{ site.baseurl }}/about">
							<i style="margin-left: 5px" class="fas"></i>
							About
						</a>
					</li>

				</ul>
			</div>
			<div>
				<ul class="navbar-nav">

					<li class="nav-item dropup">
						<span class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
							<i class="fab"></i>
							GitHub
						</span>
						<div class="dropdown-menu dropdown-menu-center">
							<a class="dropdown-item" href="https://github.com/Compliance-Resource-Pack" rel="noopener">Compliance</a>
							<a class="dropdown-item" href="https://github.com/Compliance-Addons" rel="noopener">Compliance Addons</a>
							<a class="dropdown-item" href="https://github.com/Compliance-Dungeons" rel="noopener">Compliance Dungeons</a>
							<a class="dropdown-item" href="https://github.com/Compliance-Mods" rel="noopener">Compliance Mods</a>
							<a class="dropdown-item" href="https://github.com/ComplianceTweaks" rel="noopener">Compliance Tweaks</a>
						</div>
					</li>

					<li class="nav-item dropup">
						<span class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
							<i class="fab"></i>
							Discord
						</span>
						<div class="dropdown-menu dropdown-menu-center">
							<a class="dropdown-item" href="https://discord.gg/sN9YRQbBv7" rel="noopener">Compliance</a>
							<a class="dropdown-item" href="https://discord.gg/qVeDfZw" rel="noopener">Compliance Extras</a>
						</div>
					</li>

					<li class="nav-item theme-switch-wrapper">
						<button id="ThemeBtn" onclick="changeMod(true)" class="nav-link">
							<i class="fas"></i> Auto Theme
						</button>
					</li>

				</ul>
			</div>
		</nav>
		<p>
			Website made by and for the Compliance Community
		</p>
		<p>
			<a href="mailto:contact@compliancepack.net">contact@compliancepack.net</a>
		</p>
    <small>CompliPage generated with Nuxt 3</small>
	</footer>
</template>