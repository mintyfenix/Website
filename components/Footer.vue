<template>
  <footer>
		<div class="footer-head">
			<div>
				<h4>Contact Compliance</h4>
				<ul>
					<li><img src="" alt="mail-icon"/><a href="mailto:contact@compliancepack.net">contact@compliancepack.net</a></li>
					<li><img src="" alt="discord-icon"/>Discords
						<ul>
							<li>Compliance</li>
							<li>Compliance Extras</li>
							<li>Classic Faithful</li>
						</ul>
					</li>
				</ul>
			</div>
			<div>
				<h4>About</h4>
				<ul>
					<li><img src="" alt="faq-icon"/>FAQ</li>
					<li><img src="" alt="license-icon"/>License</li>
					<li><img src="" alt="comments-policy-icon"/>Comments Policy</li>
				</ul>
			</div>
			<div>
				<h4>Report Bugs</h4>
				<ul>
					<li>For the Website</li>
					<li>For one resource pack</li>
				</ul>
			</div>
		</div>

		<ul class="social-media">
			<li>Follow Compliance</li>
			<li><img src=""/>Discord</li>
			<li><img src=""/>CurseForge</li>
			<li><img src=""/>PMC</li>
			<li><img src=""/>MCPDL</li>
		</ul>

		<hr>

		<p align="center">
			Website made by and for the Compliance Community
		</p>
	</footer>
</template>

<style lang="scss">
	footer {
		max-width: 975px;
		margin: var(--margin-big) auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		> .footer-head {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;

			> div {
				margin: 0 var(--margin-bigger) var(--margin-bigger);
				width: 250px;

				> ul >	li {
					list-style-type: none; // todo: remove this when the :has() attribute is supported (2050 incoming)

					&:has(img) {
						list-style-type: none;
					}

					> img {
						margin-right: var(--margin-normal);
					}

					> ul {
						margin-left: var(--margin-big);
					}
				}
				
			}
		}

		> hr {
			width: 80%;
			border: .5px solid #fff;
		}

		> .social-media {
			display: flex;
			flex-direction: row;
			list-style: none;

			>:first-child {
				text-transform: uppercase
			}

			> li:not(:last-of-type) {
				margin-right: var(--margin-normal);
			}
		}

	}
</style>